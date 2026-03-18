-- CreateTable
CREATE TABLE "Nom" (
    "id" SERIAL NOT NULL,
    "ner" TEXT NOT NULL,
    "une" TEXT NOT NULL,
    "hevlelID" INTEGER NOT NULL,

    CONSTRAINT "Nom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hevlelt" (
    "id" SERIAL NOT NULL,
    "ner" TEXT NOT NULL,

    CONSTRAINT "Hevlelt_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Nom" ADD CONSTRAINT "Nom_hevlelID_fkey" FOREIGN KEY ("hevlelID") REFERENCES "Hevlelt"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
