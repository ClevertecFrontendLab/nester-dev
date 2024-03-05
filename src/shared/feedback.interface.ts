import { Nullable } from '@shared/types.ts';

export interface IFeedback {
    id: string;
    fullName: Nullable<string>;
    imageSrc: Nullable<string>;
    message: Nullable<string>;
    rating: number;
    createdAt: string;
}
