import { useEffect, useState } from "react";
import { ArticleList } from "../../components/ArticleList";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import { Message } from "../../components/Message";
import apiClient from "../../services/api-client";

export const ArtigosPage = () => {
  const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);

  async function buscaArtigos() {
    const response = await apiClient.get<ArticleThumbnailProps[]>(
      "/artigos"
    );
    setArticles(response.data);
  }

  useEffect(() => {
    buscaArtigos();
  }, []);

  return articles.length ? (
    <div className="my-30">
      <ArticleList articles={articles} />
    </div>
  ) : ( 
    <Message
      title="Sem artigos no site... 🙁"
      content="O que você acha de ser o primeiro a publicar um artigo?"
      link="/artigos/novo"
      textLink="Vamos lá!"
    />
  );
};
