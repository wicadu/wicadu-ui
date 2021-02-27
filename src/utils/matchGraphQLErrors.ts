export default (graphQLErrors: any[], errKey: string): boolean => graphQLErrors.some(({ message }: { message: string }) => message.match(errKey))
