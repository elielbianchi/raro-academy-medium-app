import apiClient from "../../services/api-client";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArticleForm } from "../../components/ArticleForm";
import { ArticleThumbnailProps } from "../../components/ArticleThumbnail/ArticleThumbnail.types";

export const EditarArquivoPage = () => {
  const [artigo, setArtigo] = useState<ArticleThumbnailProps>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      buscarArtigo();
    }
  }, [id]);

  async function buscarArtigo() {
    const response = await apiClient.get<ArticleThumbnailProps>(
      `/artigos/${id}`
    );

    setArtigo(response.data);
  }

  const handleSubmit = async (artigo: ArticleThumbnailProps) => {
    if (artigo.id) {
      await apiClient.patch<ArticleThumbnailProps>(`/artigos/${id}`, {
        ...artigo,
      });

      navigate(`/artigos/${artigo.id}`);

    } else {
      const response = await apiClient.post<ArticleThumbnailProps>(`/artigos/`, {
        ...artigo,
      });
      navigate(`/artigo/${response.data.id}`);
    }
  };

  const handleDelete = async (article: ArticleThumbnailProps) => {
    if (article.id) {
      await apiClient.delete<ArticleThumbnailProps>(`/artigos/${article.id}`);
    }

    navigate("/artigos");
  };

  return (
    <>
      <div className="items-center justify-center m-10">
        <ArticleForm
          article={artigo}
          onSubmit={handleSubmit}
          onClick={handleDelete}
        />
      </div>
    </>
  );
};
