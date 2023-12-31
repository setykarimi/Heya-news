import { useTranslation } from "react-i18next";

const CardLanguage = () => {
    const { t, i18n } = useTranslation();

    const languageHandleChange =  () => {
        localStorage.setItem("lang", i18n.language == "en" ? "fa" : "en")
        i18n.changeLanguage(i18n.language == "en" ? "fa" : "en");
    }

    return (
        <div className="bg-white rounded-xl h-fit mt-4">
            <h2 className='text-xl text-blue-gray-950 font-bold mb-4 p-8 border-b border-gray-100'>
                {t("language.language")}
            </h2>
            <ul className="p-4 space-y-1 text-sm text-gray-700" >
                <li>
                    <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                        <div className="flex items-center h-5">
                            <input id="persian" name="lang" type="radio" value="fa" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300" checked={i18n.language == "fa" && true} onChange={languageHandleChange}/>
                            <label htmlFor="persian">
                                <span className="mx-2 text-gray-700 font-medium"> {t("language.fa")}</span>
                            </label>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                        <div className="flex items-center h-5">
                            <input id="English" name="lang" type="radio" value="en" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"  checked={i18n.language == "en" && true} onChange={languageHandleChange}/>
                            <label htmlFor="English">
                                <span className="mx-2 text-gray-700 font-medium"> {t("language.en")}</span>
                            </label>
                        </div>
                    </div>
                </li>
              

            </ul>
        </div>
    );
}

export default CardLanguage;