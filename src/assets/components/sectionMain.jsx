import { useState } from 'react'

function sectionMain() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='bg-gray-900 w-full flex h-full text-white'>
        <div className='p-4 w-5/6'><h2 className='p-2 text-lg text-center font-mono'>How Food May Improve Your Mood</h2><p className='w-full text-center pb-2 m-auto'><img className='w-full' src="https://static01.nyt.com/images/2021/05/06/science/06sci-well-food-mood/06sci-well-food-mood-superJumbo.jpg?quality=75&auto=webp" alt="" /></p><p className='text-slate-500'>As people across the globe grappled with higher levels of stress, depression and anxiety this past year, many turned to their favorite comfort foods: ice cream, pastries, pizza, hamburgers. But studies in recent years suggest that the sugar-laden and high-fat foods we often crave when we are stressed or depressed, as comforting as they may seem, are the least likely to benefit our mental health. Instead, whole foods such as vegetables, fruit, fish, eggs, nuts and seeds, beans and legumes and fermented foods like yogurt may be a better bet.

The findings stem from an emerging field of research known as nutritional psychiatry, which looks at the relationship between diet and mental wellness. The idea that eating certain foods could promote brain health, much the way it can promote heart health, might seem like common sense. But historically, nutrition research has focused largely on how the foods we eat affect our physical health, rather than our mental health. For a long time, the potential influence of food on happiness and mental well-being, as one team of researchers recently put it, was “virtually ignored.”

But over the years, a growing body of research has provided intriguing hints about the ways in which foods may affect our moods. A healthy diet promotes a healthy gut, which communicates with the brain through what is known as the gut-brain axis. Microbes in the gut produce neurotransmitters like serotonin and dopamine, which regulate our mood and emotions, and the gut microbiome has been implicated in mental health outcomes. “A growing body of literature shows that the gut microbiome plays a shaping role in a variety of psychiatric disorders, including major depressive disorder,” a team of scientists wrote in the Harvard Review of Psychiatry last year.

Large population studies, too, have found that people who eat a lot of nutrient-dense foods report less depression and greater levels of happiness and mental well-being. One such study, from 2016, that followed 12,400 people for about seven years found that those who increased their consumption of fruits and vegetables during the study period rated themselves substantially higher on questionnaires about their general levels of happiness and life satisfaction.</p></div>
        <div className='side-menu flex-1 p-4 border-l border-slate-200 dark:border-slate-400/20'><h4 className='p-2 text-lg text-center font-bold font-mono'>Related</h4><ul className='text-xs cursor-pointer'>
          <li><a href="#">How Food May Improve Your Mood</a></li>
          <li>Food breakdown</li>
        </ul></div>
      </div>
    </div>
  )
}

export default sectionMain;
