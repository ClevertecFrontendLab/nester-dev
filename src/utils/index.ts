export function isErrorWithMessage(error: unknown): error is {
    data: { message: string; statusCode: number };
} {
    return (
        typeof error === 'object' &&
        error != null &&
        'data' in error &&
        typeof (error as any).data === 'object' &&
        'message' in (error.data as any) &&
        typeof (error.data as any).message === 'string' &&
        'statusCode' in (error.data as any) &&
        typeof (error.data as any).statusCode === 'number'
    );
}
