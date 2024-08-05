import React, { useMemo } from 'react';
import Title from './Title';
import { PARTNERS } from '/src/data.js';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

export default function Partners({ isMobile }) {
    const { t } = useTranslation();

    const chunkArray = (array, sizes) => {
        let index = 0;
        return sizes.map(size => {
            const chunk = array.slice(index, index + size);
            index += size;
            return chunk;
        });
    };

    const rowSizes = isMobile ? [2, 2, 2, 2, 2, 2] : [2, 4, 4, 2];
    const chunkedPartners = useMemo(() => chunkArray(PARTNERS, rowSizes), [PARTNERS, rowSizes]);

    const marginRight = isMobile ? "mr-[36px]" : "mr-[66px]";

    return (
        <div className="partners text-white px-[15px]">
            <Title className="partners__title text-center px-[40px]">{t("partners")}</Title>
            {chunkedPartners.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center partners__row">
                    {row.map((partner, index) => (
                        <div
                            key={index}
                            className={classNames(
                                'flex items-center justify-center',
                                { [marginRight]: index !== row.length - 1 },
                                { 'lg:mr-[46px]': row.length === 3 && index !== row.length - 1 }
                            )}
                        >
                            <img
                                src={partner.image}
                                alt={`Partner ${index + 1}`}
                                className="lg:w-[130%] lg:h-[130%] object-contain"
                                style={{ maxWidth: '200px', maxHeight: '200px' }}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
