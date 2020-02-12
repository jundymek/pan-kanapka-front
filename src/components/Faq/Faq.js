import React from "react";
import Collapsible from "../../hoc/Collapsible";
import register_icon from "../../images/register_icon.png";
import notifications_agreement_icon from "../../images/notifications_agreement_icon.png";
import subscribe_icon from "../../images/subscribe_icon1.png";
import notification_ask from "../../images/notification_ask_message.png";
import notification_button from "../../images/przycisk_powiadamiaj.png";
import registration from "../../images/rejestracja.png";
import { FaqStep } from "./FaqStep";

function Faq() {
  const steps = [
    {
      stepNumber: 1,
      icon: register_icon,
      iconAltText: "Rejestracja",
      stepTitle: "Rejestracja",
      stepText: "Załóż nowe konto w aplikacji (wystarczy tylko podanie loginu i hasła)",
      stepImage: registration,
      stepImageAlt: "Rejestracja"
    },
    {
      stepNumber: 2,
      icon: notifications_agreement_icon,
      iconAltText: "Zgoda na notyfikacje",
      stepTitle: "Zapisanie się na subskrypcję",
      stepText: `Wyraź zgodę na otrzymywanie powiadomień (dzięki temu Pan Kanapka będzie mógł wysyłać wiadomości
              bezpośrednio do twojej przeglądarki internetowej)`,
      stepImage: notification_ask,
      stepImageAlt: "Zgoda na powiadomienia"
    },
    {
      stepNumber: 3,
      icon: subscribe_icon,
      iconAltText: "Zapisanie na powiadomienia",
      stepTitle: "Zapisanie się na subskrypcję",
      stepText: `Wybierz miejsce, które chcesz monitorować i zatwierdź chęć otrzymywania powiadomień przyciskiem
            “Powiadamiaj”. Subskrybowana lokalizacja zostanie oznaczona zielonym cieniem oraz ikonką dzwoneczka u góry
            karty lokalizacji.`,
      stepImage: notification_button,
      stepImageAlt: "Przycisk powiadamiaj"
    }
  ];

  return (
    <div id="faq" className="faq">
      <p className="faq__paragraph">
        Aplikacja <span className="faq__paragraph--mark">Pan Kanapka</span> została stworzona dla... Pana Kanapki i jego
        klientów. Jeśli pracujesz w biurowcu i korzystasz z usług osoby dostarczającej pyszne kanapki do twojego miejsca
        pracy z pewnością zdarzyła się sytuacja, że kanapki odjechały zanim zdążyłeś/aś dotrzeć do miejsca sprzedaży. Co
        by było gdybyś zawsze mógł/mogła otrzymać w porę informację o zbliżającym się Panu Kanapce. Dzięki tej aplikacji
        <span className="faq__paragraph--mark">możesz zapisać się na powiadomienia wysyłane przez Pana Kanapkę</span>
        kilka minut przed przyjazdem do twojego miejsca pracy. Wystarczy wyrazić zgodę na otrzymywanie powiadomień w
        twojej przeglądarce internetowej i zapisać się do subskrypcji wybranego miejsca dostawy kanapek. W aplikacji
        masz podgląd do wszystkich punktów, które obsługuje Pan Kanapka. Proste - nieprawdaż?
      </p>
      <section className="steps">
        <h4 className="steps__main-title">Trzy proste kroki</h4>
        <div className="steps__wrapper">
          {steps.map(item => (
            <FaqStep
              key={item.number}
              stepNumber={item.stepNumber}
              icon={item.icon}
              iconAltText={item.iconAltText}
              stepTitle={item.stepTitle}
              stepText={item.stepText}
              stepImage={item.stepImage}
              stepImageAlt={item.stepImageAlt}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Collapsible(Faq);
