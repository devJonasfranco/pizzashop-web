// import { ArrowRight, Search, X } from 'lucide-react'
import { Helmet } from "react-helmet-async";

import { Pagination } from "@/components/pagination";
// import { Button } from '@/components/ui/button'
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { OrderTableFilters } from "./order-table-filters";
import { OrderTableRow } from "./order-table-row";

export function Orders() {
	return (
		<>
			<Helmet title="Pedidos" />
			<div className="flex flex-col gap-4">
				<h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
				<div className="space-y-2.5">
					{/* filtro */}
					<OrderTableFilters />
					<div className="rounded-sm border">
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead className="w-[64px]"></TableHead>
									<TableHead className="w-[140px]">Indentificador</TableHead>
									<TableHead className="w-[180px]">Realizado</TableHead>
									<TableHead className="w-[140px]">Status</TableHead>
									<TableHead>Cliente</TableHead>
									<TableHead className="w-[140px]">Total de pedido</TableHead>
									<TableHead className="w-[164px]"></TableHead>
									<TableHead className="w-[132px]"></TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{Array.from({ length: 10 }).map((_, i) => {
									return <OrderTableRow key={i} />;
								})}
							</TableBody>
						</Table>
					</div>
					<Pagination pageIndex={0} perPage={10} totalCount={120} />
				</div>
			</div>
		</>
	);
}
