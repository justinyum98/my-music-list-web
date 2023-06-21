import { PrismaClient } from '@prisma/client';
import { Entity, Filters } from '@/server/models/entity.model';
import prisma from '@/lib/prisma';

export abstract class EntityService<T extends Entity> {
    protected prisma: PrismaClient;

    constructor() {
        this.prisma = prisma;
    }

    abstract validatePost(params: { entity: Omit<T, 'id'> }): void;

    abstract validatePatch(params: {
        entity: Partial<T> & Pick<T, 'id'>;
    }): void;

    abstract createOne({ newEntity }: { newEntity: Omit<T, 'id'> }): Promise<T>;

    abstract getMany({ filters }: { filters?: Filters<T> }): Promise<T[]>;

    abstract getOne({ filters }: { filters?: Filters<T> }): Promise<T>;

    abstract getById({ id }: { id: string }): Promise<T | null>;

    abstract updateOne({
        updatedEntity,
    }: {
        updatedEntity: Partial<T> & Pick<T, 'id'>;
    }): Promise<T | null>;

    abstract deleteById({ id }: { id: string }): Promise<boolean>;
}
