import { useNavigate } from "react-router";

import { ISpecialOffer } from "@/types/type";

export function CartSpecialOffer({ offer }: { offer: ISpecialOffer }) {
	const navigate = useNavigate();

	return (
		<div
			className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all cursor-pointer group border border-gray-200"
			onClick={() => navigate(`/special-offer/${offer.id}`)}
		>
			<div className="relative">
				<img
					src={offer.image}
					alt="car"
					className="w-full max-w-[300px] mx-auto h-[220px] object-contain transition-transform duration-300 group-hover:scale-95"
				/>
			</div>

			<div className="mt-4 space-y-1">
				<p className="text-lg font-semibold text-gray-800">{offer.name.uz}</p>
				<p className="text-sm font-sans text-gray-800">{offer.description.uz}</p>
			</div>
		</div>
	);
}
