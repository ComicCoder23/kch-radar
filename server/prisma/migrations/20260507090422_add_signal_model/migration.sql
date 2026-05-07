-- CreateTable
CREATE TABLE "Signal" (
    "id" TEXT NOT NULL,
    "category" TEXT,
    "title" TEXT NOT NULL,
    "town" TEXT,
    "date" TEXT,
    "note" TEXT,
    "link" TEXT,
    "cardType" TEXT,
    "section" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 9999,
    "badge" TEXT,
    "ctaText" TEXT DEFAULT 'View details',
    "activeFrom" TEXT,
    "activeUntil" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Signal_pkey" PRIMARY KEY ("id")
);
