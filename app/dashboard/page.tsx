"use client"

import { Users, GiftExchanges, GuestList } from '@/exampleData'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext';

type GiftExchange = {
    id: string;
    title: string;
    budget: number;
    description: string;
    end_date: string;
    pick_date: string;
    share_id: string;
};

export default function Dashboard() {
    const { user, setUser, isLoading, setIsLoading } = useUser();

    const [exchanges, setExchanges] = useState<GiftExchange[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchExchanges = async () => {
            try {
                const res = await fetch("/api/exchanges", { method: "GET" });
                const data = await res.json();

                if (res.ok) {
                    setExchanges(data);
                } else {
                    console.error("Failed to fetch exchanges:", data.error);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchExchanges();
    }, [router]);

    if (isLoading) {
        return <>Loading...</>;
    }

    // if (exchanges.length === 0) {
    //     return <>No gift exchanges found.</>;
    // }

    return (
        <div className="p-4 min-h-screen bg-background-950">
            <h1 className='text-2xl font-bold pl-4 pb-4'>
                Welcome, {user?.name || "Guest"}!
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-5 w-full'>
                <div className='col-span-1 md:col-span-3 bg-white p-4 rounded-lg shadow-md'>
                    <h2 className='text-xl font-bold mb-4'>Your Exchanges</h2>
                    <div className='grid grid-cols-4 gap-2'>
                        {exchanges.length === 0 ? (
                            <>No gift exchanges found</>
                        ) : exchanges.map((exchange) => (
                            <Link href={`/exchange/${exchange.share_id}`} key={exchange.id} className='rounded-lg bg-secondary-500 text-white p-4 hover:bg-secondary-300 transition-colors duration-200'>
                                <h3 className='text-lg font-semibold'>{exchange.title}</h3>
                                <p className='text-sm'>
                                    Exchange Date:{" "}
                                    {new Date(exchange.end_date).toLocaleString('en-US', {
                                        // weekday: 'long',
                                        year: '2-digit',
                                        month: '2-digit',
                                        day: '2-digit',
                                        // hour: 'numeric',
                                        // minute: 'numeric',
                                        // hour12: true,
                                    })}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        // <div className=" p-4">
        //     {user && <h1 className='text-3xl font-bold capitalize'>Welcome, {user.name}</h1>}
        //     {user ? (
        //         <div className='grid grid-cols-1 md:grid-cols-5 w-full'>
        //             <div className='col-span-1 md:col-span-3 bg-white p-4 rounded-lg shadow-md'>
        //                 <h2 className='text-xl font-bold mb-4'>Your Exchanges</h2>
        //                 <div className='grid grid-cols-4 gap-2'>
        //                     {userGiftExchanges.map((exchange) => (
        //                         <Link href={`/exchange/${exchange.id}`} key={exchange.id} className='rounded-lg bg-secondary-500 text-white p-4'>
        //                             <h3 className='text-lg font-semibold'>{exchange.name}</h3>
        //                             <p className='text-sm'>
        //                                 Exchange Date:{" "}
        //                                 {new Date(exchange.endDate).toLocaleString('en-US', {
        //                                     // weekday: 'long',
        //                                     year: '2-digit',
        //                                     month: '2-digit',
        //                                     day: '2-digit',
        //                                     // hour: 'numeric',
        //                                     // minute: 'numeric',
        //                                     // hour12: true,
        //                                 })}
        //                             </p>
        //                         </Link>
        //                     ))}
        //                 </div>
        //             </div>
        //         </div>
        //     ) : (
        //         <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl text-center">
        //             <h1 className="text-3xl font-bold mb-4">Welcome to Holiday Circle!</h1>
        //             <p className="text-gray-700">
        //                 You are logged in. Start creating or managing your gift exchanges.
        //             </p>
        //             <button className="mt-6 bg-primary-300 hover:bg-primary-200 text-white font-medium py-2 px-4 rounded-lg">
        //                 Create a Gift Exchange
        //             </button>
        //         </div>
        //     )}
            
        // </div>
    );
  }
  