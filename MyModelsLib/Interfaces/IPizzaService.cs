namespace MyModelsLib.Interface;
public interface IPizzaService{
  public string SGetById(int id);
  public bool SPost(string nameOfPizza,int id,bool glotan );
  public bool SputName(int id, string name);
  public void SputGlotan(int id, bool glotan);
  public void SDel(int id);
}