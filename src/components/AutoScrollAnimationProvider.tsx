import React, { useEffect } from 'react';

interface AutoScrollAnimationProviderProps {
    children: React.ReactNode;
    selector?: string;
    animation?: string;
    threshold?: number;
}

export const AutoScrollAnimationProvider: React.FC<AutoScrollAnimationProviderProps> = ({
    children,
    selector = '[data-animate], section, .animate-on-scroll',
    animation = 'fade-up',
    threshold = 0.1
}) => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const element = entry.target as HTMLElement;
                        element.classList.remove('scroll-animate-initial');
                        element.classList.add(`animate-${animation}`);
                        observer.unobserve(element);
                    }
                });
            },
            {
                threshold,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        // Find and observe all elements that match the selector
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
            element.classList.add('scroll-animate-initial');
            // Add stagger delay based on element index
            element.classList.add(`stagger-${Math.min(index % 5 + 1, 5)}`);
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, [selector, animation, threshold]);

    return <>{children}</>;
};