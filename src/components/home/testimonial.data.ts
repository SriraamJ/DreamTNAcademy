import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Excellent coaching and guidance!',
    content:
      'The trainers are highly knowledgeable and guide you through each part of the exam process. They provide study materials that are really helpful, and the mock tests are exactly like the actual exam. I feel much more confident now!.',
    user: {
      id: 1,
      name: 'Rahul',
      professional: 'TNSURB Aspirant',
      photo: '1.jpg',
    },
  },
  {
    id: 2,
    title: 'Focused and supportive environment',
    content:
      'The institute has a great environment for studying, and the faculty members are very supportive. They give individual attention to each student and provide tips to tackle difficult questions. Highly recommend it for serious aspirants.',
    user: {
      id: 1,
      name: 'Dhanush',
      professional: 'Software Engineer',
      photo: '2.jpg',
    },
  },
  {
    id: 3,
    title: 'Great value for money',
    content:
      'Compared to other institutes, this one offers affordable coaching without compromising quality. They have excellent practice sessions, and the doubt-clearing sessions are very effective. I would recommend it to anyone preparing for the Tamil Nadu Police exams.',
    user: {
      id: 1,
      name: 'Gowtham',
      professional: 'TNUSRB Aspirant',
      photo: '3.jpg',
    },
  },
  {
    id: 4,
    title: 'Mock tests and revision sessions are top-notch',
    content:
      'The institutes regular mock tests and revision sessions help you track your progress and identify areas for improvement. They use past papers to structure the questions, which is a big plus.',
    user: {
      id: 1,
      name: 'Arvind',
      professional: 'Clerk',
      photo: '4.jpg',
    },
  },
]
