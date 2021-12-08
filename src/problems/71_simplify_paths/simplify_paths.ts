export function simplifyPath(path: string): string {
    const stack: string[] = [];

    for (const element of path.split("/")) {
        switch (element) {
            case "":
            case ".":
                break;
            case "..":
                stack.pop();
            case ".":
                break;
            default:
                stack.push(element);
        }
    }

    const canonical = `/${stack.join("/")}`;

    return canonical;
}
