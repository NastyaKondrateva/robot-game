// ALL QUESTIONS LIVE HERE. Replace the content below with the final material; game logic stays untouched.

export const caseMeta = {
  1: { label: 'Case 01', title: 'The Mystery of Connections', subtitle: 'Correlation or Causation?', unit: 'Question' },
  2: { label: 'Case 02', title: 'Decode the Clues', subtitle: 'Fix the Vocabulary', unit: 'Clue' },
  3: { label: 'Case 03', title: 'Catch the AI Mistake', subtitle: 'Detect the Error', unit: 'Report' },
} as const

export const kitchenMessages = [
  'Three mysteries. One birthday cake. Let\u2019s begin!',
  'Case solved! We found the cake base!',
  'Case solved! Our cake has decorations!',
] as const

/* ---------- Case 01 ---------- */
export interface Situation {
  id: string
  statement: string
  question: string
  answer: 'Yes' | 'No'
  explanation: string
  altQuestion: string
  alternatives: string[] // the correct one is at index `correctAlt`; the game shuffles them
  correctAlt: number
  altExplanation: string
}

export const case1: Situation[] = [
  {
    id: 'coffee',
    statement: 'Students who drink more coffee often get higher grades.',
    question: 'Does this prove that coffee causes higher grades?',
    answer: 'No',
    explanation: 'We only see that two things happen together.',
    altQuestion: 'What else could explain this connection?',
    alternatives: [
      'Students who study longer may also drink more coffee.',
      'Coffee always gives students perfect grades.',
      'Grades depend only on coffee.',
    ],
    correctAlt: 0,
    altExplanation: 'A hidden factor, like study time, can explain both.',
  },
  {
    id: 'sleep',
    statement: 'Students who sleep longer often get higher grades.',
    question: 'Does this prove that more sleep causes higher grades?',
    answer: 'No',
    explanation: 'A link between two things is not proof of a cause.',
    altQuestion: 'What else could explain this connection?',
    alternatives: [
      'Students with better routines may both sleep more and study more effectively.',
      'Grades always depend only on sleep.',
      'Sleeping longer guarantees an A.',
    ],
    correctAlt: 0,
    altExplanation: 'Good routines may affect both sleep and grades.',
  },
  {
    id: 'rain',
    statement: 'On rainy days, umbrella sales go up. Car accidents also go up.',
    question: 'Does this prove that umbrellas cause car accidents?',
    answer: 'No',
    explanation: 'Both things happen on rainy days, but one does not cause the other.',
    altQuestion: 'What else could explain this connection?',
    alternatives: [
      'Rain may explain both: people buy umbrellas, and roads become slippery.',
      'Umbrellas block drivers\u2019 view on every street.',
      'Car accidents make people buy umbrellas.',
    ],
    correctAlt: 0,
    altExplanation: 'Rain is the hidden factor behind both.',
  },
  {
    id: 'icecream',
    statement: 'In summer, ice cream sales and sunburn cases rise together.',
    question: 'Does this prove that ice cream causes sunburn?',
    answer: 'No',
    explanation: 'Two things rising together do not prove a cause.',
    altQuestion: 'What else could explain this connection?',
    alternatives: [
      'Hot, sunny weather may explain both.',
      'Ice cream makes skin weaker.',
      'Sunburn makes people hungry for ice cream.',
    ],
    correctAlt: 0,
    altExplanation: 'Sunny weather is the hidden factor.',
  },
  {
    id: 'experiment',
    statement:
      'Researchers randomly gave one group of students extra sleep. That group got higher test scores than the other group.',
    question: 'Is this good evidence that extra sleep can cause higher scores?',
    answer: 'Yes',
    explanation: 'Random groups make other explanations less likely. Careful design matters!',
    altQuestion: 'Why is this evidence stronger?',
    alternatives: [
      'Random groups are similar, so other factors are less likely to explain the result.',
      'The first group was simply bigger.',
      'Experiments are never wrong.',
    ],
    correctAlt: 0,
    altExplanation: 'Random assignment helps us test a cause.',
  },
]

/* ---------- Case 02 ---------- */
export interface VocabPair {
  id: string
  term: string
  definition: string
}

export const case2: VocabPair[] = [
  { id: 'correlation', term: 'Correlation', definition: 'A relationship between two things: when one changes, the other often changes too.' },
  { id: 'causation', term: 'Causation', definition: 'One thing directly makes another thing happen.' },
  { id: 'interpretability', term: 'Interpretability', definition: 'How easily people can understand why a model gave its answer.' },
  { id: 'confounding', term: 'Confounding Variable', definition: 'A hidden factor that influences both things we compare.' },
  { id: 'aimodel', term: 'AI Model', definition: 'A computer system that learns patterns from data to give predictions or answers.' },
]

/* ---------- Case 03 ---------- */
export interface ErrorTask {
  id: string
  statements: string[]
  errorIndex: number
  explanation: string
}

export const case3: ErrorTask[] = [
  {
    id: 'platform',
    statements: [
      'Students who spend more time on a learning platform sometimes get higher grades.',
      'This observation shows a correlation.',
      'Therefore, spending more time on the platform definitely causes higher grades.',
    ],
    errorIndex: 2,
    explanation: 'Correlation does not always mean causation.',
  },
  {
    id: 'icecream',
    statements: [
      'Ice cream sales and sunburn cases rise together in summer.',
      'This looks like a correlation.',
      'Therefore, eating ice cream causes sunburn.',
    ],
    errorIndex: 2,
    explanation: 'The hidden factor is hot, sunny weather.',
  },
  {
    id: 'storks',
    statements: [
      'Cities with more storks also have more babies.',
      'So storks must bring the babies.',
      'A hidden factor, like city size, may explain both.',
    ],
    errorIndex: 1,
    explanation: 'A pattern in the data does not show who brings the babies!',
  },
  {
    id: 'pattern',
    statements: [
      'Because the AI found a pattern, the reason must be true.',
      'A pattern can help us ask good questions.',
      'We need more evidence before we say what causes what.',
    ],
    errorIndex: 0,
    explanation: 'A pattern is a clue, not a proof.',
  },
]
