import cv from '../static/images/workWith/cv.jpg'
import career from '../static/images/workWith/career.jpg'
import coach from '../static/images/workWith/coach.jpg'
import pack from '../static/images/workWith/pack.jpg'

export const workFormatItems = {
  career: [
    {id: 0, description: 'Составление эффективного резюме'},
    {id: 1, description: 'Упаковка профиля на LinkedIn'},
    {id: 2, description: 'Анализ рынка, помощь с определением зарплатных ожиданий'},
    {id: 3, description: 'Алгоритм действий: с чего начать, при смене профессии'},
    {id: 4, description: 'Определение дальнейших шагов для профессионального развития'},
    {id: 5, description: 'Оценка сильных и слабых сторон'},
    {id: 6, description: 'Подготовка самопрезентации к собеседованию'},
    {id: 7, description: 'Тестовое интервью с HR'},
  ],
    coach: [
    {id: 0, description: 'Помощь с определением своих целей и путей их достижения'},
    {id: 1, description: 'Эмоциональное и профессиональное выгорание'},
    {id: 2, description: 'Проблемы в межличностных отношениях'},
    {id: 3, description: 'Неуверенность в себе: синдром “отличника” и “самозванца”'},
    {id: 4, description: 'Боязнь публичных выступлений'},
    {id: 5, description: 'Определение истинной мотивации'},
    {id: 6, description: 'Проработка установок и ограничивающих убеждений'},
    {id: 7, description: 'Поиск внутренних ресурсов'},
    {id: 8, description: 'Повышение личной эффективности и многое другое'}
  ]
}

export const workWithValues = [
  {
    id: 0,
    title: 'Работа с резюме',
    subtitle: 'онлайн-сессия 60 минут',
    image: cv,
    tags: [
      {id: 0, description: 'Оформление существующего или создание с нуля нового резюме'},
      {id: 1, description: 'Заполнение всех необходимых блоков, включая достижения'},
      {id: 2, description: 'Составление сопроводительного письма'},
      {id: 3, description: 'Бонус: чек-лист “эффективное резюме”'}
    ],
    price: '1500',
  },
  {
    id: 2,
    title: 'Карьерное консультирование',
    subtitle: 'онлайн-сессия 60 - 90 минут',
    image: career,
    tags: [
      {id: 0, description: 'Ответы на ваши вопросы по поиску работы'},
      {id: 1, description: 'Анализ рынка'},
      {id: 2, description: 'Определение зарплатных ожиданий'},
      {id: 3, description: 'Помощь с определением перспектив карьерного развития'},
      {id: 4, description: 'Определение ваших дальнейших шагов на рынке труда'},
      {id: 5, description: 'Разбор вопросов, задаваемых на собеседованиях'},
      {id: 6, description: 'Формирование самопрезентации'},
      {id: 7, description: 'Бонус: сопровождение в чате в течение 3х недель после консультации (можно задавать вопросы)'}
    ],
    price: '3000',
  },
  {
    id: 3,
    title: 'Коуч-сессии',
    subtitle: 'онлайн-сессия 60 минут',
    image: coach,
    tags: [
      {id: 0, description: '1 коуч сессия позволяет поработать над одним запросом'},
      {id: 1, description: 'описание запроса'},
      {id: 2, description: 'определение успешного результата сессии'},
      {id: 3, description: 'работа с инструментами коучинга, направленная на достижения вашей цели'}
    ],
    price: '3000',
  },
  {
    id: 4,
    title: 'Пакетные сессии',
    subtitle: '',
    image: pack,
    tags: null,
    pack: [
      {
        id: 0,
        description: [
          'Карьерная консультация + работа с резюме',
          'Бонус: сопровождение 3 недели в чате после консультации',
          'Бонус: чек-лист эффективное резюме, который можно использовать в будущем'
        ],
        price: '3500'
      },
      {
        id: 1,
        description: [
          'Пакет из 3х коуч сессий',
          'Прописываем план работы на 3 встречи'
        ],
        price: '7000'
      },
      {
        id: 2,
        description: [
          'Пакет из 5 коуч сессий',
          'Прописываем план работы на 5 встреч'
        ],
        price: '12000'
      },
    ],
    price: '15000',
  },
]
