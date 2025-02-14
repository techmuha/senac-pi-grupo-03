import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { PageHeading } from "@/components/page-heading";
import { Select } from "@/components/select";
import { Textarea } from "@/components/textarea";
import { type FormEvent, useCallback } from "react";
import { useNavigate, useParams } from "react-router";

export function NovoPet() {
	const navigate = useNavigate();
	const params = useParams();

	const isEditing = !!params?.id;

	const handleSubmit = useCallback(
		(event: FormEvent<HTMLFormElement>) => {
			event.preventDefault();

			const formData = new FormData(event.currentTarget);
			// @ts-expect-error
			const fieldValues = Object.fromEntries(formData.entries());
			console.log("🚀 ~ NovoPet ~ fieldValues:", fieldValues);

			navigate("/");
		},
		[navigate],
	);

	return (
		<>
			<PageHeading
				title={isEditing ? "Cadastro" : "Novo PetCard"}
				description={
					isEditing
						? "Edite aqui os dados de seu PetCard."
						: "Cadastre aqui seu novo PetCard."
				}
			/>

			<form className="grid gap-6" onSubmit={handleSubmit}>
				<Input name="name" label="Nome" required />
				<Input
					name="birthdate"
					label="Data de nascimento"
					type="date"
					required
				/>
				<Select
					name="breed"
					label="Raça"
					options={[
						{
							label: "Corgi",
							value: "1",
						},
						{
							label: "Siamês",
							value: "2",
						},
					]}
					required
				/>
				<Textarea name="notes" label="Observações" required />

				<Button className="mt-20" type="submit">
					{isEditing ? "Editar dados" : "Cadastrar Pet"}
				</Button>
			</form>
		</>
	);
}
