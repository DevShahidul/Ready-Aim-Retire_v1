export function syncHeight(el: string): void {
    const elements: NodeListOf<HTMLElement> = document.querySelectorAll(
        `.${el}`,
    );

    if (elements.length === 0) return;

    elements.forEach((el: HTMLElement) => {
        el.style.removeProperty("--height");
    });

    let maxHeight = 0;

    elements.forEach((el: HTMLElement) => {
        const height: number = el.scrollHeight;
        if (height > maxHeight) {
            maxHeight = height;
        }
    });

    elements.forEach((el: HTMLElement) => {
        el.style.setProperty("--height", `${maxHeight}px`);
    });
}
