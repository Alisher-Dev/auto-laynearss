import { useNavigate } from "react-router";

import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
	const navigate = useNavigate();

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
			<h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
			<p className="text-2xl text-gray-600 mb-2">Страница не найдена</p>
			<p className="text-gray-500 mb-6">Возможно, она была удалена или вы ошиблись адресом.</p>
			<Button onClick={() => navigate("/")} className="text-white">
				Вернуться на главную
			</Button>
		</div>
	);
}
