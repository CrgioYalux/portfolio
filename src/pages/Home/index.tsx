import Divider from "../../components/Divider";
import HeaderSection from "./sections/Header";
import IntroductionSection from "./sections/Introduction";
import ConsoleSection from "./sections/Console";
import Card from "../../components/Card";

const Home: React.FC = () => {
    return (
		<div className='min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark'>
			<HeaderSection />
			<Divider />
			<IntroductionSection />
			<Divider />
			<ConsoleSection />
			<Divider />
			<div className='w-full flex flex-col items-center justify-center py-4 px-4 md:px-10'>
				<div className='w-full flex flex-col gap-4 items-center justify-center md:items-start'>
					<h2 className='text-3xl'>Personal Projects</h2>
					<div className='w-full flex flex-col gap-2 flex-wrap md:flex-row'>
						<Card 
						title='Pixaday'
						deploy={'https://pixaday.vercel.app'}
						repository={'https://github.com/CrgioYalux/pixaday'}
						description={'A canvas for pixelart with a today\'s colors selection'}
						image=''
						/>
						<Card 
						title='trmnl'
						deploy={'https://trmnl.vercel.app'}
						repository={'https://github.com/CrgioYalux/trmnl'}
						description={'A simulated terminal with filesystem operations in the browser'}
						image=''
						/>
						<Card 
						title='Tipper'
						deploy={'https://tipper-monorepo.vercel.app'}
						repository={'https://github.com/CrgioYalux/tipper-monorepo'}
						description={'A layout for a social network insipired on Twitter capabilities'}
						image=''
						/>
						<Card 
						title='Community Board'
						deploy={'#'}
						repository={'https://github.com/CrgioYalux/community-board'}
						description={'A social network based on the idea of community boards'}
						image=''
						/>
						<Card 
						title='Study.Pomodoro'
						deploy={'https://study-pomodoro.vercel.app'}
						repository={'https://github.com/CrgioYalux/study.pomodoro'}
						description={'An app to complete piled tasks using the Pomodoro technique'}
						image=''
						/>
						<Card 
						title='Text2Morse'
						deploy={'https://crgioyalux.github.io/text2Morse'}
						repository={'https://github.com/CrgioYalux/text2Morse'}
						description={'An app that turns input text into Morse code'}
						image=''
						/>
						<Card 
						title='A Memory Game'
						deploy={'https://boring-memory-game.netlify.app'}
						repository={'https://github.com/CrgioYalux/memory_game'}
						description={'A match pairs memory game'}
						image=''
						/>
						<Card 
						title='A Ranked Memory Game'
						deploy={'https://memory-game-with-amiguitos.herokuapp.com/play'}
						repository={'https://github.com/CrgioYalux/the_memory_game'}
						description={'A match pairs memory game in which you can win rank as you play and compete with other players to be shown in the board'}
						image=''
						/>
						<Card 
						title='Make a Poll'
						deploy={'https://make-a-simple-poll.herokuapp.com'}
						repository={'https://github.com/CrgioYalux/make-a-poll'}
						description={'An app for making polls and see the results in realtime'}
						image=''
						/>
					</div>
					<div className='flex flex-row items-center gap-2 text-primary-300 bg-accent-100 rounded-lg p-2'>
						<span className='font-extrabold text-2xl md:text-3xl'>*</span>
						<div className='flex flex-col font-semibold'>
							<small className='text-sm'>
									Some projects might be down. 
									<a 
									href={'https://www.youtube.com/watch?v=NPwyyjtxlzU'}
									target='_blank'
									className='md:hover:underline ml-1'
									>I'm broke.</a>
							</small>
							<small className='text-sm'>You can definitely trust me on that they work and do what I say they do.</small>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
};

export default Home;
