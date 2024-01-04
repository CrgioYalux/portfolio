import Card from "../../../components/Card";

const Projects: React.FC = () => {
	return (
		<div className='w-full flex flex-col items-center justify-center py-4 px-4 md:px-10'>
			<div className='w-full grid grid-rows-[3rem_1fr] gap-4'>
				<h2 className='text-3xl self-center'>Projects</h2>
				<div className='w-full grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-2'>
					<Card 
					title='Pixaday'
					deploy={'https://pixaday.vercel.app.'}
					repository={'https://github.com/CrgioYalux/pixaday.'}
					description={'A canvas for pixelart with an each day\'s color palette.'}
					/>
					<Card 
					title='trmnl'
					deploy={'https://trmnl.vercel.app.'}
					repository={'https://github.com/CrgioYalux/trmnl.'}
					description={'A simulated terminal with filesystem operations in the browser.'}
					/>
					<Card 
					title='Tipper'
					deploy={'https://tipper-monorepo.vercel.app.'}
					repository={'https://github.com/CrgioYalux/tipper-monorepo.'}
					description={'A layout for a social network insipired on Twitter capabilities.'}
					/>
					<Card 
					title='Community Board'
					deploy={'#.'}
					repository={'https://github.com/CrgioYalux/community-board.'}
					description={'A social network based on the idea of community boards.'}
					/>
					<Card 
					title='Study.Pomodoro'
					deploy={'https://study-pomodoro.vercel.app.'}
					repository={'https://github.com/CrgioYalux/study.pomodoro.'}
					description={'An app to complete piled tasks using the Pomodoro technique.'}
					/>
					<Card 
					title='Text2Morse'
					deploy={'https://crgioyalux.github.io/text2Morse.'}
					repository={'https://github.com/CrgioYalux/text2Morse.'}
					description={'An app that turns input text into Morse code.'}
					/>
					<Card 
					title='A Memory Game'
					deploy={'https://boring-memory-game.netlify.app.'}
					repository={'https://github.com/CrgioYalux/memory_game.'}
					description={'A match pairs memory game.'}
					/>
					<Card 
					title='A Ranked Memory Game'
					deploy={'https://memory-game-with-amiguitos.herokuapp.com/play.'}
					repository={'https://github.com/CrgioYalux/the_memory_game.'}
					description={'A match pairs memory game in which you can win rank as you play and compete with other players to be shown in the board.'}
					/>
					<Card 
					title='Make a Poll'
					deploy={'https://make-a-simple-poll.herokuapp.com.'}
					repository={'https://github.com/CrgioYalux/make-a-poll.'}
					description={'An app for making polls and see the results in realtime.'}
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
