import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import { Controller } from "@/helpers/contain";

import instagramIcon from "../../assets/Instagram_icon.png";
import telegramIcon from "../../assets/Telegram_logo.svg.webp";
import { Button } from "../ui/button";

export function Footer() {
	const navigate = useNavigate();
	const { t } = useTranslation();

	return (
		<div className="bg-gray-900 py-10">
			<Controller className="grid gap-5">
				<div className="border-b-1 border-gray-500 pb-5">
					<p className="text-gray-300">{t("footer-title")}</p>
				</div>
				<div>
					<p className="text-2xl text-gray-100 text-center sm:text-start">Avto-Layner</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 mt-5">
						<span className="flex flex-col items-start gap-2">
							<Button
								variant="link"
								className="text-gray-100 font-bold p-0 block mx-auto sm:m-0"
								onClick={() => navigate("/model")}
							>
								{t("models")}
							</Button>
							<Button variant="link" className="text-gray-100 font-bold p-0 block mx-auto sm:m-0">
								{t("offers")}
							</Button>
							<Button variant="link" className="text-gray-100 font-bold p-0 block mx-auto sm:m-0">
								Дилеры
							</Button>
						</span>
						<span>
							<p className="text-gray-100 font-bold text-center sm:text-start">Выбор и покупка</p>
							<span className="flex flex-col items-start gap-2 mt-2">
								<Button variant="link" className="text-gray-300 font-sans p-0 block mx-auto sm:m-0">
									Корпоративные продажи
								</Button>
								<Button variant="link" className="text-gray-300 font-sans p-0 block mx-auto sm:m-0">
									Расчет рассрочки платежа
								</Button>
							</span>
						</span>
						<span>
							<p className="text-gray-100 font-bold text-center sm:text-start">Бренд Avto-Layner</p>
							<span className="flex flex-col items-start gap-2 mt-2">
								<Button variant="link" className="text-gray-300 font-sans p-0 block mx-auto sm:m-0">
									Новый бренд Avto-Layner
								</Button>
								<Button variant="link" className="text-gray-300 font-sans p-0 block mx-auto sm:m-0">
									История Avto-Layner
								</Button>
								<Button variant="link" className="text-gray-300 font-sans p-0 block mx-auto sm:m-0">
									Спонсорство
								</Button>
							</span>
						</span>
						<span>
							<p className="text-gray-100 font-bold text-center sm:text-start">Avto-Layner в Узбекистане</p>
							<span className="flex flex-col items-start gap-2 mt-2">
								<Button variant="link" className="text-gray-300 font-sans p-0 block mx-auto sm:m-0">
									Преимущества дистрибьютора
								</Button>
								<Button variant="link" className="text-gray-300 font-sans p-0 block mx-auto sm:m-0">
									Новости
								</Button>
								<Button variant="link" className="text-gray-300 font-sans p-0 block mx-auto sm:m-0">
									Станьте дилером Avto-Layner
								</Button>
							</span>
						</span>
						<p className="text-gray-100 text-center sm:text-start">
							{t("hot-line")} Avto-Layner <br />{" "}
							<a href="tel:1333" className="font-bold">
								1333
							</a>
						</p>
					</div>
				</div>
				<div>
					<p className="text-gray-300">Avto-Layner {t("in-networks")}</p>
					<span className="flex items-center gap-3 mt-2">
						<a href="https://instagram.com" target="_blank">
							<img src={instagramIcon} alt="instagram" className="w-[28px] h-[28px]" />
						</a>
						<a href="https://telegram.com" target="_blank">
							<img src={telegramIcon} alt="telegram" className="w-[28px] h-[28px]" />
						</a>
					</span>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center mt-5 gap-10">
					<p className="text-xs text-gray-300 sm:col-span-2">{t("footer-title-two")}</p>
					<Button variant="outline" className="text-gray-100 bg-gray-800 h-[60px]">
						{t("feedback")}
					</Button>
				</div>
			</Controller>
		</div>
	);
}
