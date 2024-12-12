// components/ExchangePageServer.tsx
import React from 'react';
import { GiftExchanges, GuestList } from '@/exampleData';
import ExchangePageClient from './ExchangePageClient';
import { useUser } from '@/app/context/UserContext';

export default async function ExchangePageServer({
    params,
}: {
    params: { id: string };
}) {
    const { user, setUser, isLoading, setIsLoading } = useUser();
    const id = (await params).id;

    // Fetch the specific exchange
    const exchange = GiftExchanges.find((exchange) => exchange.id === id) || null;

    // Check if the user is part of the exchange
    const isUserPartOfExchange = GuestList.some(
        (guest) => guest.exchange_id === id && guest.user_id === user
    );

    return (
        <ExchangePageClient
            exchange={exchange}
            isUserPartOfExchange={isUserPartOfExchange}
        />
    );
}
