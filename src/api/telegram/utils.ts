const PARSER = /^((\/\w+)((\s+)(\w+)((\s+)(.*))?)?)/;
export function parseCommand(text: string | undefined): { command: string, option?: string, args?: string[] } | null {
    if (!text || text.trim().length === 0) return null;
    let matches = PARSER.exec(text);
    if (!matches) return null;
    return {
        command: matches[2],
        option: matches[5] || undefined,
        args: matches[8] && matches[8].trim().split(" ") || undefined
    };
}