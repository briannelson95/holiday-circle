export default function Dashboard() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl text-center">
                <h1 className="text-3xl font-bold mb-4">Welcome to Holiday Circle!</h1>
                <p className="text-gray-700">
                    You are logged in. Start creating or managing your gift exchanges.
                </p>
                <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
                    Create a Gift Exchange
                </button>
            </div>
        </div>
    );
  }
  