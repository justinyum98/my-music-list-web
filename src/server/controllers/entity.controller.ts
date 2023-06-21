import { NextApiRequest, NextApiResponse } from 'next';
import { EntityService } from '@/server/services/entity.service';
import { Entity, Filters, PostModel } from '@/server/models/entity.model';
import { getErrorMessage } from '@/lib/error';

export abstract class EntityController<
  TEntity extends Entity,
  TPostModel extends PostModel = PostModel,
  TPatchModel extends Partial<TEntity> = Partial<TEntity>
> {
  abstract service: EntityService<TEntity>;
  entityName: string;

  constructor(entityName: string) {
    this.entityName = entityName;
  }

  abstract validatePostModel(model: unknown): model is TPostModel;

  abstract validatePatchModel(model: unknown): model is TPatchModel;

  abstract convertToEntity({
    model,
  }: {
    model: TPostModel;
  }): Omit<TEntity, 'id'>;

  abstract getFilters({ query }: { query: any }): Filters<TEntity>;

  async getEntities(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    const { query } = req;
    try {
      const filters = this.getFilters({ query });
      const entities = await this.service.getMany({ filters });
      res.status(200).json(entities);
    } catch (error) {
      res.status(400).json({ error: getErrorMessage({ error }) });
    }
  }

  async getEntity(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    const { query } = req;
    try {
      const filters = this.getFilters({ query });
      const entity = await this.service.getOne({ filters });
      if (!entity) {
        throw new Error(`${this.entityName} not found`);
      }
      res.status(200).json(entity);
    } catch (error) {
      res.status(400).json({ error: getErrorMessage({ error }) });
    }
  }

  async createEntity(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    const model = req.body;
    try {
      if (this.validatePostModel(model)) {
        const convertedModel = this.convertToEntity({ model });
        const newEntity = await this.service.createOne({
          newEntity: convertedModel,
        });
        res.status(201).json(newEntity);
      }
    } catch (error) {
      res.status(400).json({ error: getErrorMessage({ error }) });
    }
  }

  async updateEntity(req: NextApiRequest, res: NextApiResponse): Promise<void> {
    const { query, body: model } = req;
    try {
      const filters = this.getFilters({ query });
      const [entity] = await this.service.getMany({ filters });
      if (!entity) {
        throw new Error(`${this.entityName} not found`);
      }
      if (this.validatePatchModel(model)) {
        const convertedModel = {
          ...entity,
          ...model,
        };
        const updatedEntity = await this.service.updateOne({
          updatedEntity: convertedModel,
        });
        res.status(200).json(updatedEntity);
      }
    } catch (error) {
      res.status(400).json({ error: getErrorMessage({ error }) });
    }
  }
}
