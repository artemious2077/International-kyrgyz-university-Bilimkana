import styles from './TableMobile.module.scss';
import { useState } from 'react';
import { Typography } from '@/UI/Typography/Typography';
import { RightArrowIcon } from "@/assets/icons/RightArrowIcon.jsx";
import { LeftArrowIcon } from "@/assets/icons/LeftArrowIcon.jsx";
import { useTranslation } from "react-i18next";

export const TableMobile = () => {
    const { t } = useTranslation();

    const data = [
        {
            score: t("enrollment.column1.numbersOfPoints"),
            level: 'Elementary',
            cef: 'A1',
            description: t("enrollment.string1"),
        },
        {
            score: t("enrollment.column2.numbersOfPoints"),
            level: 'Pre-Intermediate',
            cef: 'A2',
            description: t("enrollment.string2"),
        },
        {
            score: t("enrollment.column3.numbersOfPoints"),
            level: 'Intermediate',
            cef: 'B1',
            description: t("enrollment.string3")
        },
        {
            score: t("enrollment.column4.numbersOfPoints"),
            level: 'Upper Intermediate',
            cef: 'B2',
            description: t("enrollment.string4"),
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < data.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };

    return (
        <div className={styles.testTableMobile}>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th className={styles.headerSection}>
                        <div className={styles.tableSection}>
                            <ul className={styles.tableSection}>
                                <li>{t("enrollment.column.point")}</li>
                                <li>{t("enrollment.column.level")}</li>
                                <li>{t("enrollment.column.cef")}</li>
                            </ul>
                        </div>
                    </th>
                    <th className={styles.headerTitle}>
                        <div className={styles.tableSectionTitle}>
                            <Typography variant="p">{t("enrollment.string")}</Typography>
                        </div>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <ul className={styles.bodyText}>
                            <li>{data[currentIndex].score}</li>
                            <li>{data[currentIndex].level}</li>
                            <li>{data[currentIndex].cef}</li>
                        </ul>
                    </td>
                    <td>
                        <p>{data[currentIndex].description}</p>
                    </td>
                </tr>
                </tbody>
            </table>

            <div className={styles.tableControls}>
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className={currentIndex === 0 ? styles.disabledButton : ""}
                >
                    <LeftArrowIcon color={currentIndex === 0 ? "gray" : "var(--text-orange-color)"} width="45px" height="45px" />
                </button>
                <button
                    onClick={handleNext}
                    disabled={currentIndex === data.length - 1}
                    className={currentIndex === data.length - 1 ? styles.disabledButton : ""}
                >
                    <RightArrowIcon color={currentIndex === data.length - 1 ? "gray" : "var(--text-orange-color)"} width="45px" height="45px" />
                </button>
            </div>
        </div>
    );
};
