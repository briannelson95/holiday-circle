import { Users, GiftExchanges } from '@/exampleData'

export default function Dashboard() {
    const uuid = "123abc"
    return (
        <div className="min-h-screen bg-background-950 p-4">
            {uuid && <h1 className='text-3xl font-bold'>Welcome, {Users[0].name}</h1>}
            {uuid ? (
                <div className='grid grid-cols-1 md:grid-cols-5 w-full'>
                    <div className='col-span-1 md:col-span-3 bg-white p-4 rounded-lg shadow-md'>
                        <h2 className='text-xl font-bold'>Your Exchanges</h2>
                        
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
  