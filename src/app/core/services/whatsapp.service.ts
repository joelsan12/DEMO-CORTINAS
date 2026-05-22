import { Injectable } from '@angular/core';
import { formatMeters } from '../../shared/utils/quote.utils';

export interface QuotePayload {
    curtainType: string;
    environment: string;
    width: number;
    height: number;
    productName: string;
}

@Injectable({
    providedIn: 'root'
})
export class WhatsappService {
    private readonly BASE_URL = 'https://wa.me';

    generateQuoteUrl(phoneNumber: string, payload: QuotePayload): string {
        if (!phoneNumber) {
            console.warn('WhatsappService: El número de teléfono destino no está configurado.');
            return '#';
        }

        const { curtainType, environment, width, height, productName } = payload;

        // Formateo limpio usando Template Literals y la utilidad existente
        const message = `Hola, me interesa una cotización para una cortina ${curtainType} para ${environment}, ` +
            `medidas aprox: ${formatMeters(width)}m x ${formatMeters(height)}m. ` +
            `Vi este modelo en su web: ${productName}.`;

        return `${this.BASE_URL}/${phoneNumber.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;
    }
}