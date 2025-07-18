export const scrollToSection = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
        const header = document.querySelector('nav');
        const headerOffset = header ? header.offsetHeight : 0;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};
