import type { LucideIcon } from "lucide-react";
import {
  Ear,
  Footprints,
  Radio,
  Shield,
  Skull,
  Wrench,
} from "lucide-react";

export interface StoryChoice {
  icon: LucideIcon;
  label: string;
  hint: string;
  nextId: string;
}

export type StoryOutcome = "success" | "failure";

export interface StoryFragment {
  id: string;
  title: string;
  text: string;
  choices: StoryChoice[];
  outcome?: StoryOutcome;
}

export const startFragmentId = "wake";

/**
 * Draft graph only. Wording is a structural stand-in until owner pastes
 * exact STW boot + tutorial lines. Do not treat this copy as canonical.
 *
 * Arc: XXI-c. mind wakes in a Рейс-01 survivor after the crash on Астра.
 * Рея-7 speaks short, has no colony archives. Capsule wreck (1,0) →
 * убежище (0,0) → first steps outside. One episode, not a world tour.
 */
export const storyFragments: Record<string, StoryFragment> = {
  wake: {
    id: "wake",
    title: "Темнота",
    text: "Холод. Чужое тело. Память этого тела не приходит. За треснувшим визором — сиреневое небо Астры. Где-то близко коротко говорит голос, не человек.",
    choices: [
      {
        icon: Ear,
        label: "Слушать голос",
        hint: "Не вставать, пока не поймёшь, кто говорит",
        nextId: "reya",
      },
      {
        icon: Footprints,
        label: "Встать сразу",
        hint: "Тело после капсулы может не выдержать",
        nextId: "ending_body",
      },
    ],
  },
  reya: {
    id: "reya",
    title: "Рея-7",
    text: "«Я — Рея-7. Ты в чужом теле. Архивов колонии у меня нет. Транспорт „Рейс-01“ сбился с курса на Терра-22. Капсула. Координаты обломков: один, ноль. Убежище: ноль, ноль. Встань, когда сможешь». Голос короткий. Всеведущим он не притворяется.",
    choices: [
      {
        icon: Wrench,
        label: "Проверить визор и ремни",
        hint: "Сначала капсула, потом шаг",
        nextId: "capsule",
      },
      {
        icon: Radio,
        label: "Спросить, кто ты был",
        hint: "Рея-7 не вернёт чужую память",
        nextId: "capsule",
      },
    ],
  },
  capsule: {
    id: "capsule",
    title: "Обломки капсулы · 1,0",
    text: "Каркас капсулы «Рейс-01» ещё тёплый. Лом, трещины, фон радиации. Снаружи — пустошь карантина, бывшая колония. Сиреневый свет. До убежища по азимуту Рея-7: запад, к нулю-нулю.",
    choices: [
      {
        icon: Wrench,
        label: "Снять с каркаса что можно нести",
        hint: "Лом пригодится у двери убежища",
        nextId: "wreck_field",
      },
      {
        icon: Footprints,
        label: "Выйти без разбора",
        hint: "Открытая клетка, тело ещё чужое",
        nextId: "wreck_field",
      },
    ],
  },
  wreck_field: {
    id: "wreck_field",
    title: "Поле обломков",
    text: "За капсулой — щебень и тени. В низине тяжелее дышать: азот. Сбоку шорох — не ветер. Рея-7: «Убежище ближе, чем низина. Не туда».",
    choices: [
      {
        icon: Shield,
        label: "Идти по азимуту к 0,0",
        hint: "Как сказала Рея-7",
        nextId: "trail",
      },
      {
        icon: Skull,
        label: "Спуститься в низину на шорох",
        hint: "Фауна или азот — без разницы для лёгких",
        nextId: "fauna",
      },
    ],
  },
  fauna: {
    id: "fauna",
    title: "Не ветер",
    text: "Мутировавшая фауна уже здесь. Она быстрее чужого тела. Рея-7 не орёт — коротко: «Назад. К азимуту».",
    choices: [
      {
        icon: Footprints,
        label: "Отойти к азимуту, не бежать",
        hint: "Вернуться на тропу к убежищу",
        nextId: "trail",
      },
      {
        icon: Skull,
        label: "Бежать напрямик через низину",
        hint: "Фауна и азот сразу",
        nextId: "ending_fauna",
      },
    ],
  },
  trail: {
    id: "trail",
    title: "К нулю-нулю",
    text: "Грунт хрустит. Вдали блеск: автономные машины колонии, без людей. Следы мародёров свежие, но их самих не видно. Убежище — низкий объём на горизонте.",
    choices: [
      {
        icon: Shield,
        label: "Держаться открытой полосы",
        hint: "Видно машины, видно дверь",
        nextId: "shelter_gate",
      },
      {
        icon: Footprints,
        label: "Срезать ложбиной",
        hint: "Низина, азот",
        nextId: "ending_nitrogen",
      },
    ],
  },
  shelter_gate: {
    id: "shelter_gate",
    title: "Убежище · 0,0",
    text: "Дверь убежища. Замки колонии молчат — Рея-7 не из их сети. Нужен лом или терпение на рукопожатие шлюза. Внутри — не спасение мира. Первый контур, чтобы тело не остыло.",
    choices: [
      {
        icon: Wrench,
        label: "Вскрыть створку ломом",
        hint: "Если снял с капсулы — хватит",
        nextId: "shelter",
      },
      {
        icon: Radio,
        label: "Дать Рея-7 говорить со шлюзом",
        hint: "Короткий запрос. Архивов всё равно нет",
        nextId: "shelter",
      },
    ],
  },
  shelter: {
    id: "shelter",
    title: "Внутри",
    text: "Тишина, пыль, запасной воздух. Можно сесть. Можно сразу к порогу: первые шаги снаружи — не рейд, проверка, что тело слушается. Рея-7: «Не дальше периметра. Шахта, Нора, Ковчег — не сегодня».",
    choices: [
      {
        icon: Shield,
        label: "Закрепиться и выйти на короткий периметр",
        hint: "Увидеть Астру и вернуться",
        nextId: "perimeter",
      },
      {
        icon: Footprints,
        label: "Идти сразу дальше по карте",
        hint: "Первый час — не поход на Нору-22",
        nextId: "ending_nitrogen",
      },
    ],
  },
  perimeter: {
    id: "perimeter",
    title: "Первые шаги",
    text: "За порогом — та же сиреневая пустошь. Следы мародёров обходят убежище. Машина колонии проходит далеко, без приказа на тебя. Это не конец истории Астры. Это начало: тело, Рея-7, крыша над головой.",
    choices: [
      {
        icon: Shield,
        label: "Вернуться внутрь до темноты",
        hint: "Запись на этом обрывается живым",
        nextId: "ending_foothold",
      },
      {
        icon: Footprints,
        label: "Идти дальше по ложбине",
        hint: "Периметр кончился, азот — нет",
        nextId: "ending_nitrogen",
      },
    ],
  },
  ending_foothold: {
    id: "ending_foothold",
    title: "Точка опоры",
    text: "Капсула позади. Убежище держит воздух. Рея-7 молчит, пока молчать можно. Ты не вспомнил, кем было это тело, и не открыл архив колонии. Ты пережил первый час на Астре. Дальше карта начнётся сама.",
    choices: [],
    outcome: "success",
  },
  ending_body: {
    id: "ending_body",
    title: "Тело не встало",
    text: "Рывок без паузы. Ремни, рёбра, темнота снова. Рея-7 ещё что-то говорит — коротко, без смысла для гаснущего слуха. Запись обрывается в капсуле.",
    choices: [],
    outcome: "failure",
  },
  ending_fauna: {
    id: "ending_fauna",
    title: "Фауна",
    text: "Низина отвечает быстрее, чем чужие ноги. Нет второго тела. Рея-7 не успевает дать новый азимут.",
    choices: [],
    outcome: "failure",
  },
  ending_nitrogen: {
    id: "ending_nitrogen",
    title: "Низина",
    text: "Азот в ложбине стоит тяжелее воздуха. Шаги короче. Карта Рея-7 ещё светится, когда уже нечем дышать. Не сегодня — не шахта, не Нора, не Ковчег.",
    choices: [],
    outcome: "failure",
  },
};
