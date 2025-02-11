import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArticleThumbnailProps } from "../ArticleThumbnail/ArticleThumbnail.types";
import { Button } from "../Button";
import { Input } from "../Input";
import { RitchTextEditor } from "../RitchTextEditor";

type ArticleFormProps = {
  article?: ArticleThumbnailProps;
  onSubmit: (article: ArticleThumbnailProps) => void;
  onClick: (article: ArticleThumbnailProps) => void;
};

export const ArticleForm: React.FC<ArticleFormProps> = ({
  article,
  onSubmit,
  onClick,
}) => {
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [imagem, setImagem] = useState("");
  const [conteudo, setConteudo] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (article) {
      setTitulo(article.titulo);
      setResumo(article.resumo);
      setImagem(article.imagem);
      setConteudo(article.conteudo || "");
    }
  }, [article]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSubmit) {
      const articleToSubmit = {
        ...article,
        titulo,
        resumo,
        imagem,
        conteudo,
      };
      onSubmit(articleToSubmit as ArticleThumbnailProps);
    }
  };

  const transformaImagemEmBase64 = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event: any) => {
      setImagem(event.target.result);
    };
  };

  const handleClick = () => {
    onClick(article as ArticleThumbnailProps);
  };

  return (
    <div className="grid min-h-screen mx-10 ">
      <div>
        <h1 className="text-xl font-semibold">
          Hello there 👋,&nbsp;
          <span className="font-normal">preencha os dados para continuar</span>
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <Input
            placeholder="Digite aqui o título"
            type="text"
            name="titulo"
            label="Titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
          <Input
            placeholder="Breve resumo do artigo"
            type="textarea"
            name="resumo"
            label="Resumo"
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
            required
          />

          <Input
            placeholder="Imagem do artigo"
            type="file"
            name="image"
            label="Banner"
            onChange={transformaImagemEmBase64}
            required={!article}
          />

          <RitchTextEditor
            label="Conteúdo"
            name="conteudo"
            value={conteudo}
            onChange={setConteudo}
          />
          <div className="flex">
            <Button type="submit" buttonColor="blue">
              Salvar
            </Button>
            <Button buttonColor="gray" action={() => navigate("/artigos")}>
              Voltar
            </Button>
            <Button buttonColor="red" action={() => handleClick()}>
              Deletar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
