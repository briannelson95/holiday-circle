// components/ExchangePageServer.tsx
import React from 'react';
import { GiftExchanges, GuestList } from '@/exampleData';
import ExchangePageClient from './ExchangePageClient';

export default async function ExchangePageServer({
    params,
}: {
    params: { id: string };
}) {
    const id = (await params).id;
    const user = "123abc"; // Mocked user, replace with actual user data from auth.

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
