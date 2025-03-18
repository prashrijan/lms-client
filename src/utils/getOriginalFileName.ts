export function getOriginalFileName(path: string) {
    const match = path.match(/-\d+-(.+)$/);
    return match ? match[1] : path;
}
