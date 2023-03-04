import { Router } from 'express';

export const router = Router()

router.get('/lista', (req, res) => {
    try {
        return res.status(200).json({
            "total": 10,
            "items": [
                {
                    "id": 1,
                    "cidade": "Campinas",
                    "latitude": -228951606,
                    "longitude": -471711205.11
                },
                {
                    "id": 2,
                    "cidade": "Valinhos",
                    "latitude": -229860169,
                    "longitude": -470888407
                }
            ]
        })
    } catch (error) {
        return res.status(500).json({ 'message': 'Ocorreu um erro' })
    }
})