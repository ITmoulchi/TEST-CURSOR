"use client";
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

export default function StatCard({ number, text }: { number: number, text: string }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div ref={ref} className="text-center">
            <div className="text-5xl font-bold text-teal-600">
                {inView ? <CountUp end={number} duration={2.5} /> : '0'}
            </div>
            <p className="mt-2 text-gray-600">{text}</p>
        </div>
    );
} 