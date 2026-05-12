import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import heroAgent from "@/assets/hero-agent.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import keysImg from "@/assets/keys.jpg";

const properties = [
  { img: property1, title: "2-комн., Пресненский район", price: "24 500 000 ₽", area: "62 м²", floor: "8/24", tag: "Свежее" },
  { img: property2, title: "3-комн. с видом на город, ЦАО", price: "39 800 000 ₽", area: "84 м²", floor: "16/22", tag: "От собственника" },
  { img: property3, title: "Студия с дизайнерским ремонтом", price: "16 200 000 ₽", area: "38 м²", floor: "5/12", tag: "Готова к сделке" },
];

const services = [
  { t: "Продажа квартиры", d: "Оценка по рынку, фотосессия, размещение на площадках, показы." },
  { t: "Покупка и подбор", d: "Подборка под бюджет, проверка истории, торг с собственником." },
  { t: "Ипотека", d: "Подача заявок в банки-партнёры, подбор ставки, помощь со сделкой." },
  { t: "Юридическое сопровождение", d: "Проверка документов, договор, безопасные расчёты, регистрация." },
];

const cases = [
  { t: "Продали 2-комн. за 21 день", d: "Семья переезжала в Подмосковье. Сделали оценку, подсветили плюсы района — нашли покупателя без скидки." },
  { t: "Подобрали квартиру в ЦАО", d: "Клиент 3 месяца искал сам. Отобрали 6 вариантов из закрытой базы, закрыли сделку с торгом 1,8 млн ₽." },
  { t: "Сложная сделка с ипотекой", d: "Альтернатива на 3 квартиры. Сопроводили все стороны, согласовали даты — без расторжений." },
];

const reviews = [
  { n: "Анна К.", t: "Сопровождали покупку первой квартиры. Без давления, всё по делу — спокойно объяснили каждый шаг." },
  { n: "Дмитрий П.", t: "Продали быстрее, чем рассчитывали. Понравилось, что цену обосновали цифрами, а не «на глаз»." },
  { n: "Мария и Сергей", t: "Помогли с альтернативой и ипотекой одновременно. Документы — в порядке, нервов ноль." },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", note: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({ title: "Заполните имя и телефон", description: "Мы перезвоним в течение 15 минут." });
      return;
    }
    toast({ title: "Заявка принята", description: "Свяжемся с вами в ближайшее время." });
    setForm({ name: "", phone: "", note: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-md bg-primary text-primary-foreground grid place-items-center font-display font-bold">B1</span>
            <span className="font-display font-semibold tracking-tight">Be One <span className="text-muted-foreground font-normal">· Москва</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#objects" className="hover:text-foreground">Объекты</a>
            <a href="#services" className="hover:text-foreground">Услуги</a>
            <a href="#cases" className="hover:text-foreground">Кейсы</a>
            <a href="#reviews" className="hover:text-foreground">Отзывы</a>
            <a href="#contact" className="hover:text-foreground">Контакты</a>
          </nav>
          <a href="#contact"><Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">Связаться</Button></a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="container grid lg:grid-cols-12 gap-10 py-14 lg:py-20 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary mb-6">
              <span className="w-8 h-px bg-primary" /> Агентство недвижимости · 5 лет в Москве
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05] text-balance">
              Спокойная сделка <br className="hidden md:block" />
              <span className="text-primary">с недвижимостью</span> в Москве
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Be One — небольшое агентство с понятным подходом: показываем реальные объекты,
              работаем по договору, отвечаем за каждую деталь сделки.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact"><Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6">Получить подборку объектов</Button></a>
              <a href="#valuation"><Button size="lg" variant="outline" className="h-12 px-6 border-border hover:bg-surface">Узнать стоимость моей квартиры</Button></a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <dt className="text-2xl font-display font-bold text-primary">5 лет</dt>
                <dd className="text-xs text-muted-foreground mt-1">на рынке Москвы</dd>
              </div>
              <div>
                <dt className="text-2xl font-display font-bold text-primary">200+</dt>
                <dd className="text-xs text-muted-foreground mt-1">закрытых сделок</dd>
              </div>
              <div>
                <dt className="text-2xl font-display font-bold text-primary">РГР</dt>
                <dd className="text-xs text-muted-foreground mt-1">членство гильдии</dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-3 border border-primary/30 rounded-2xl" />
              <img src={heroAgent} alt="Команда Be One в офисе в Москве" width={1280} height={1280} className="relative rounded-2xl object-cover w-full aspect-[4/5]" />
              <div className="absolute -bottom-6 -left-6 bg-surface-elevated border border-border rounded-xl p-4 shadow-xl max-w-[220px]">
                <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.39 7.36H22l-6.18 4.49L18.21 22 12 17.27 5.79 22l2.39-8.15L2 9.36h7.61z"/></svg>
                  4.9 / 5
                </div>
                <p className="text-xs text-muted-foreground mt-1">Рейтинг клиентов в Яндекс Картах</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS — animated SVG */}
      <section className="border-y border-border bg-surface/40">
        <div className="container py-14">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">Как проходит сделка</h2>
            <p className="text-sm text-muted-foreground max-w-md">Прозрачный путь от первой встречи до получения ключей.</p>
          </div>
          <div className="relative">
            <svg viewBox="0 0 800 80" className="w-full h-20" aria-hidden>
              <path className="draw-line" d="M40 40 L760 40" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" />
              {[40, 240, 440, 640, 760].map((x, i) => (
                <g key={i}>
                  <circle cx={x} cy={40} r="6" fill="hsl(var(--primary))" className="pulse-dot" style={{ animationDelay: `${i * 0.3}s` }} />
                  <circle cx={x} cy={40} r="12" fill="none" stroke="hsl(var(--primary) / 0.3)" />
                </g>
              ))}
            </svg>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-4">
              {["Знакомство", "Подбор / оценка", "Просмотры", "Договор и расчёты", "Ключи"].map((s, i) => (
                <div key={s}>
                  <div className="text-xs text-primary font-semibold mb-1">Шаг {i + 1}</div>
                  <div className="text-sm font-medium">{s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTS */}
      <section id="objects" className="container py-20">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Свежие объекты</h2>
            <p className="text-muted-foreground mt-2">Подборка обновляется еженедельно. Полную базу присылаем по запросу.</p>
          </div>
          <a href="#contact" className="text-primary text-sm hover:underline">Запросить полную подборку →</a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {properties.map((p) => (
            <article key={p.title} className="group rounded-2xl overflow-hidden bg-surface border border-border hover:border-primary/40 transition-colors">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" width={1024} height={768} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full bg-background/80 backdrop-blur border border-border">{p.tag}</span>
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold">{p.title}</h3>
                <div className="mt-1 text-primary text-xl font-bold">{p.price}</div>
                <div className="mt-3 flex gap-4 text-xs text-muted-foreground">
                  <span>Площадь: {p.area}</span>
                  <span>Этаж: {p.floor}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-surface/40 border-y border-border">
        <div className="container py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Услуги</h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">Берёмся за весь цикл сделки или за отдельный этап — как удобнее вам.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <div key={s.t} className="p-6 rounded-2xl bg-surface-elevated border border-border">
                <div className="text-primary text-sm font-mono mb-3">0{i + 1}</div>
                <h3 className="font-display font-semibold text-lg">{s.t}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="container py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold">Кейсы сделок</h2>
            <p className="text-muted-foreground mt-3">Каждая сделка — это история конкретной семьи. Несколько свежих примеров.</p>
            <img src={keysImg} alt="Передача ключей от квартиры" loading="lazy" width={1024} height={768} className="mt-8 rounded-2xl w-full aspect-[4/3] object-cover" />
          </div>
          <div className="lg:col-span-7 space-y-4">
            {cases.map((c, i) => (
              <div key={c.t} className="p-6 rounded-2xl border border-border bg-surface flex gap-5">
                <div className="text-3xl font-display font-bold text-primary leading-none">0{i + 1}</div>
                <div>
                  <h3 className="font-display font-semibold text-lg">{c.t}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{c.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-surface/40 border-y border-border">
        <div className="container py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">О команде</h2>
            <p className="text-muted-foreground mt-4">
              Be One — это компактная команда практикующих агентов. Мы не «продаём всё подряд»:
              работаем точечно по Москве, поэтому хорошо знаем районы, дома и реальные цены.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "5 лет на рынке недвижимости Москвы",
                "Сертифицированные специалисты, повышение квалификации",
                "Членство в Российской Гильдии Риэлторов (РГР)",
                "Реальные сделки в районах ЦАО, ЗАО, САО",
              ].map((t) => (
                <li key={t} className="flex gap-3 items-start">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[property2, property1, keysImg, property3].map((src, i) => (
              <img key={i} src={src} alt="" loading="lazy" width={512} height={512} className={`rounded-xl object-cover w-full aspect-square ${i % 2 ? 'translate-y-6' : ''}`} />
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="container py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Что говорят клиенты</h2>
        <p className="text-muted-foreground mb-10">Отзывы оставлены в Яндекс Картах и переданы лично.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure key={r.n} className="p-6 rounded-2xl bg-surface border border-border">
              <div className="flex gap-1 text-primary mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.39 7.36H22l-6.18 4.49L18.21 22 12 17.27 5.79 22l2.39-8.15L2 9.36h7.61z"/></svg>
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed">«{r.t}»</blockquote>
              <figcaption className="mt-4 text-xs text-muted-foreground">— {r.n}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="bg-surface/40 border-y border-border">
        <div className="container py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Гарантии и прозрачность</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Договор с агентством", d: "Фиксируем условия, сроки и комиссию письменно. Никаких устных договорённостей." },
              { t: "Юридическая проверка", d: "Проверяем историю объекта, обременения, права собственников до выхода на сделку." },
              { t: "Прозрачная комиссия", d: "Один процент, согласованный заранее. Без скрытых надбавок и доплат." },
            ].map((g) => (
              <div key={g.t} className="p-6 rounded-2xl border border-primary/20 bg-surface-elevated">
                <h3 className="font-display font-semibold text-lg text-primary">{g.t}</h3>
                <p className="text-sm text-muted-foreground mt-2">{g.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="contact" className="container py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <div id="valuation">
            <h2 className="text-3xl md:text-4xl font-bold">Оставьте заявку</h2>
            <p className="text-muted-foreground mt-3 max-w-md">
              Подберём объекты под ваш бюджет или сделаем бесплатную оценку квартиры.
              Перезвоним в течение 15 минут в рабочее время.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-primary mt-0.5">📞</span>
                <div>
                  <a href="tel:+74998405005" className="font-medium hover:text-primary">8 (499) 840-50-05</a>
                  <div className="text-muted-foreground text-xs">Ежедневно, 9:00 – 21:00</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-0.5">✉</span>
                <div>
                  <a href="mailto:aliyarov.samir@mail.ru" className="font-medium hover:text-primary">aliyarov.samir@mail.ru</a>
                  <div className="text-muted-foreground text-xs">Ответим в течение часа</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-0.5">📍</span>
                <div>
                  <div className="font-medium">Рочдельская ул., 15 стр 21–22</div>
                  <div className="text-muted-foreground text-xs">Москва, 101000</div>
                </div>
              </div>
            </div>
            <div className="mt-6 rounded-2xl overflow-hidden border border-border">
              <iframe
                title="Be One на Яндекс Картах"
                src="https://yandex.ru/map-widget/v1/?ll=37.564%2C55.760&mode=search&text=%D0%A0%D0%BE%D1%87%D0%B4%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F%20%D1%83%D0%BB.%2C%2015%20%D1%81%D1%82%D1%80%2021-22%2C%20%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0&z=16"
                width="100%"
                height="260"
                loading="lazy"
                style={{ border: 0 }}
              />
            </div>
          </div>

          <form onSubmit={submit} className="p-8 rounded-2xl bg-surface border border-border space-y-4">
            <div>
              <label className="text-xs text-muted-foreground">Как к вам обращаться</label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Имя" className="mt-1.5 bg-background border-border h-11" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Телефон</label>
              <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+7 (___) ___-__-__" className="mt-1.5 bg-background border-border h-11" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Что нужно (необязательно)</label>
              <Textarea value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} placeholder="Например: 2-комн. в ЦАО до 30 млн ₽" className="mt-1.5 bg-background border-border min-h-[100px]" />
            </div>
            <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12">
              Отправить заявку
            </Button>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Нажимая «Отправить», вы соглашаетесь с обработкой персональных данных. Не передаём номера третьим лицам.
            </p>
          </form>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="container py-8 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Be One · Агентство недвижимости в Москве</div>
          <div>Член Российской Гильдии Риэлторов</div>
        </div>
      </footer>
    </div>
  );
}
