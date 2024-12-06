import { Users, GiftExchanges, GuestList } from '@/exampleData'
import Link from 'next/link';

export default function Dashboard() {
    const uuid = "123abc";

    const user = Users.find((user) => user.uuid === uuid);

    // Step 1: Get the exchange IDs the user is part of
    const userExchanges = GuestList.filter(guest => guest.user_id === user?.uuid)
        .map(guest => guest.exchange_id);

    // Step 2: Use the exchange IDs to find the corresponding GiftExchanges
    const userGiftExchanges = GiftExchanges.filter(exchange => 
        userExchanges.includes(exchange.id)
    );

    return (
        <div className="min-h-screen bg-background-950 p-4">
            {user && <h1 className='text-3xl font-bold capitalize'>Welcome, {user.name}</h1>}
            {user ? (
                <div className='grid grid-cols-1 md:grid-cols-5 w-full'>
                    <div className='col-span-1 md:col-span-3 bg-white p-4 rounded-lg shadow-md'>
                        <h2 className='text-xl font-bold mb-4'>Your Exchanges</h2>
                        <div className='grid grid-cols-4 gap-2'>
                            {userGiftExchanges.map((exchange) => (
                                <Link href={`/exchange/${exchange.id}`} key={exchange.id} className='rounded-lg bg-secondary-500 text-white p-4'>
                                    <h3 className='text-lg font-semibold'>{exchange.name}</h3>
                                    <p className='text-sm'>
                                        Exchange Date:{" "}
                                        {new Date(exchange.endDate).toLocaleString('en-US', {
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
            ) : (
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl text-center">
                    <h1 className="text-3xl font-bold mb-4">Welcome to Holiday Circle!</h1>
                    <p className="text-gray-700">
                        You are logged in. Start creating or managing your gift exchanges.
                    </p>
                    <button className="mt-6 bg-primary-300 hover:bg-primary-200 text-white font-medium py-2 px-4 rounded-lg">
                        Create a Gift Exchange
                    </button>
                </div>
            )}
            
        </div>
    );
  }
  