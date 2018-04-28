declare const groupBy: <T>(array: T[], groupingKeyFn: (item: T) => string) => {
    [key: string]: T[];
};
export { groupBy };
