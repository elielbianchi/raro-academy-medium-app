import apiClient from "../../services/api-client";
import { useEffect, useState } from "react";

import { ArticleList } from "../../components/ArticleList";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";
import { Message } from "../../components/Message";

export const MeusArtigosPage = () => {
  const [articles, setArticles] = useState<ArticleThumbnailProps[]>([]);

  async function buscaMeusArtigos() {
    const response = await apiClient.get<ArticleThumbnailProps[]>(
      "/artigos/meus-artigos"
    );
    setArticles(response.data);
  }

  useEffect(() => {
    buscaMeusArtigos();
  }, []);

  return articles.length ? (
    <div className="my-30">
      <ArticleList articles={articles} />
    </div>
  ) : (
    <Message 
    title="Sem artigos... 🙁" 
    content="O que você acha de publicar seu primeiro artigo?" 
    link="Vamos lá!"/>
  );
};
