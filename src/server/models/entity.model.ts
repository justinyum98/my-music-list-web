export type Entity = {
    id: string;
};

export type PostModel = Omit<Entity, 'id'>;

export type Filters<T> = {
    [P in keyof T]?: T[P][];
};

export type EntityQuery = Partial<Entity>;
