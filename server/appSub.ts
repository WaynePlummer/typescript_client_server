export function getResponse(args: any): string {
    console.log("server\\appSub");
    return `This is result for POST request. Args: ${JSON.stringify(args)}`;
}