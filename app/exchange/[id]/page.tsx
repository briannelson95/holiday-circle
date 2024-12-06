// app/exchange/[id]/page.tsx
import ExchangePageServer from '@/components/ExchangePageServer';

export default async function Page({ params }: { params: { id: string } }) {
    return <ExchangePageServer params={params} />;
}
