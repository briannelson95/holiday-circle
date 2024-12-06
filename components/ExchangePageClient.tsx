// components/ExchangePageClient.tsx
"use client"; // Mark this as a client component

import { useRouter } from 'next/navigation';

type ExchangePageClientProps = {
    exchange: {
        id: string;
        name: string;
        desctription: string;
        endDate: string;
    } | null;
    isUserPartOfExchange: boolean;
};

export default function ExchangePageClient({
    exchange,
    isUserPartOfExchange,
}: ExchangePageClientProps) {
    const router = useRouter();

    // Redirect if the user is not part of the exchange
    if (!isUserPartOfExchange) {
        router.push('/dashboard');
        return null; // Avoid rendering the page
    }

    // If exchange data is not found
    if (!exchange) {
        return <p>Exchange not found</p>;
    }

    return (
        <div>
            <h1>{exchange.name}</h1>
            <p>{exchange.desctription}</p>
            <p>
                Exchange Date:{' '}
                {new Date(exchange.endDate).toLocaleString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                })}
            </p>
        </div>
    );
}
