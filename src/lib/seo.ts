import { WEEKS, weekFileBase, type Week } from "@/data";

export const SITE = "https://curriculum.visualgospelbook.com";
export const BOOK = "https://visualgospelbook.com/";

const HOME_DESCRIPTION =
  "A free 30-week leader guide for The Visual Gospel: the word, a plain definition, a memory verse, and discussion for small groups, classes, and youth.";

export function weekTitle(week: Week) {
  return `${week.word} — Free Small-Group Lesson | The Visual Gospel`;
}

export function weekDescription(week: Week) {
  const lead = week.definition.replace(/\s+/g, " ").trim();
  const tail = ` Free week ${week.n} lesson for a group, class, or youth group.`;
  const room = 160 - tail.length;
  const cut = lead.length <= room ? lead : `${lead.slice(0, room - 1).replace(/\s+\S*$/, "")}…`;
  return cut + tail;
}

export function pageHead({
  title,
  description,
  path,
  image = `${SITE}/og.jpg`,
  index = true,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  index?: boolean;
}) {
  const url = `${SITE}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: index ? "index,follow" : "noindex,follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const homeHead = pageHead({
  title: "The Visual Gospel — Free 30-Week Leader Guide",
  description: HOME_DESCRIPTION,
  path: "/",
});

export function weekHead(week: Week) {
  return pageHead({
    title: weekTitle(week),
    description: weekDescription(week),
    path: `/week/${week.n}`,
    image: `${SITE}/slides/${weekFileBase(week)}.jpg`,
  });
}

function jsonLd(data: unknown) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(data).replace(/</g, "\\u003c"),
  };
}

export function homeJsonLd() {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: "The Visual Gospel Leader Guide",
    url: SITE,
    description: HOME_DESCRIPTION,
    isAccessibleForFree: true,
    inLanguage: "en",
    educationalUse: "small group study",
    author: { "@type": "Person", name: "Philip Leineweber" },
    isBasedOn: {
      "@type": "Book",
      name: "The Visual Gospel",
      isbn: "9798194307937",
      url: BOOK,
      author: { "@type": "Person", name: "Philip Leineweber" },
    },
    hasPart: WEEKS.map((week) => ({
      "@type": "LearningResource",
      name: week.word,
      url: `${SITE}/week/${week.n}`,
      position: week.n,
    })),
  });
}

export function weekJsonLd(week: Week) {
  return jsonLd({
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: `${week.word} — Week ${week.n}`,
    url: `${SITE}/week/${week.n}`,
    description: week.definition,
    isAccessibleForFree: true,
    teaches: week.word,
    citation: week.ref,
    author: { "@type": "Person", name: "Philip Leineweber" },
    isPartOf: {
      "@type": "LearningResource",
      name: "The Visual Gospel Leader Guide",
      url: SITE,
    },
    isBasedOn: {
      "@type": "Book",
      name: "The Visual Gospel",
      url: BOOK,
    },
  });
}
