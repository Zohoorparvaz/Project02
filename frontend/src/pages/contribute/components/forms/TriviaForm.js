import React from "react";
import { useForm, Controller } from "react-hook-form";

export default function TriviaForm(props) {
	const { watch, handleSubmit, control } = useForm();
	const at = watch("at", 2);

	const { onSubmit, onChangeInfo, onRemoveQuestion, onChangeLink, onRemoveOption, onInsertOption, onInsertQuestion, data } = props;
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>

				<h1>Trivia </h1>
				<ul>
					<li>
						Category: <input type="text" placeholder="Rocket Science" onChange={onChangeInfo} />
					</li>
					<li>
						Game Name: <input type="text" placeholder="Rocket Trivia" onChange={onChangeInfo} />
					</li>
					<li>
						Contributor: <input type="text" placeholder="Your name / You can leave it anonymous" onChange={onChangeInfo} />
					</li>
					<li>
						<label className="game-description_contributor">Description:</label>
						<textarea cols="50" rows="5" placeholder="Tell me more about the game" onChange={onChangeInfo} />
					</li>
					{data.questions.map((question, questionIndex) => (
						<li key={question.id}>
							Question {questionIndex + 1}
							<Controller
								as={<input />}
								name={question.id}
								control={control}
								defaultValue=""
							/>
							<button onClick={onRemoveQuestion}>Delete</button>
							<ul>
								<li>
									Link: <input type="url" placeholder="Link to learn more" onChange={onChangeLink} />
								</li>
								{data.questions[questionIndex].options.map((option, optionIndex) => (
									<li key={option.id}>
										Option {optionIndex + 1}
										<Controller
											as={<input />}
											name={option.id}
											control={control}
											defaultValue=""
										/>
										<button onClick={onRemoveOption}>Delete</button>

									</li>
								))}
							</ul>
							<section>
								<button type="button" onClick={onInsertOption}>
									New option
        </button>
							</section>
						</li>
					))}
				</ul>
				<section>
					<button type="button" onClick={onInsertQuestion}>
						New question
        </button>
				</section>

				<input type="submit" />
			</form>
		</>
	);
}