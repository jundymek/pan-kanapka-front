import React, { useState } from "react";

function Faq() {
  return (
    <section className="faq">
      <h3 className="faq__title">FAQ - o co chodzi w Panu Kanapce</h3>
      <p className="faq__paragraph">
        Aplikacja Pan Kanapka została stworzona dla... Pana Kanapki i jego klientów. Jeśli pracujesz w biurowcu i
        korzystasz z usług osoby dostarczającej pyszne kanapki do twojego miejsca pracy z pewnością zdarzyła się
        sytuacja, że kanapki odjechały zanim zdążyłeś/aś dotrzeć do miejsca sprzedaży. Co by było gdybyś zawsze
        mógł/mogła otrzymać w porę informację o zbliżającym się Panu Kanapce. Dzięki tej aplikacji możesz zapisać się na
        powiadomienia wysyłane przez Pana Kanapkę kilka minut przed przyjazdem do twojego miejsca pracy. Wystarczy
        wyrazić zgodę na otrzymywanie powiadomień w twojej przeglądarce internetowej i zapisać się do subskrypcji
        wybranego miejsca dostawy kanapek. W aplikacji masz podgląd do wszystkich punktów, które obsługuje Pan Kanapka.
        Proste - nieprawdaż?
      </p>
      <section className="steps">
        <div className="steps__block-wrapper">
          <div className="steps__block steps__block--first">
            
          </div>
          <span className="steps__counter">Krok 1</span>
          <h5 className="steps__title">Rejestracja</h5>
          <p className="steps__paragraph">Załóż nowe konto w aplikacji (wystarczy tylko podanie loginu i hasła)</p>
        </div>
        <div className="steps__block-wrapper">
          <div className="steps__block steps__block--second">

          </div>
          <span className="steps__counter">Krok 2</span>
          <h5 className="steps__title">Zgoda na powiadomienia</h5>
          <p className="steps__paragraph">Wyraź zgodę na otrzymywanie powiadomień (dzięki temu Pan Kanapka będzie mógł wysyłać wiadomości bezpośrednio do twojej przeglądarki internetowej.</p>
        </div>
        <div className="steps__block-wrapper">
          <div className="steps__block steps__block--third">

          </div>
          <span className="steps__counter">Krok 3</span>
          <h5 className="steps__title">Zapisanie się na subskrypcję</h5>
          <p className="steps__paragraph">Wybierz miejsce, które chcesz monitorować i zatwierdź chęć otrzymywania powiadomień przyciskiem “Powiadamiaj”. Subskrybowana lokalizacja zostanie oznaczona zielonym cieniem oraz ikonką dzwoneczka u góry karty lokalizacji.</p>
        </div>
      </section>
    </section>
  );
}

export default Faq;
