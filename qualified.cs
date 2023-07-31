using System.Collections.Generic;

public class WorkItem
{
  public int wordSize;
  public string data;
  public string output;
  public int priority; // New field for priority

  // Constructor to assign a default priority of 1
  public WorkItem()
  {
    priority = 1;
  }
}

public class WorkDriver
{
  Prioritizer prioritizer = new Prioritizer();
  Worker worker = new Worker();

  public void AddWork(string data, int priority = 1) // Accept priority as an additional input
  {
    WorkItem item = Parser.ParseWorkItem(data, priority);
    prioritizer.AddWorkItem(item);
  }

  public string GetNextResult()
  {
    WorkItem item = prioritizer.TakeNextItem();
    worker.DoWork(item);

    return item.output;
  }
}

public class Parser
{
  public static WorkItem ParseWorkItem(string data, int priority = 1) // Accept priority as an additional input
  {
    string[] props = data.Split(',');

    WorkItem workItem = new WorkItem();
    workItem.wordSize = int.Parse(props[0]);
    workItem.data = props[1];
    workItem.priority = priority;

    return workItem;
  }
}

public class Prioritizer
{
  List<WorkItem> prioritizedWork = new List<WorkItem>();

  public void AddWorkItem(WorkItem workItem)
  {
    // Iterate through the list and insert the item in priority order
    for (int i = 0; i < prioritizedWork.Count; i++)
    {
      WorkItem currentItem = prioritizedWork[i];

      if (Compare(workItem, currentItem) < 0) // Changed <= to <
      {
        prioritizedWork.Insert(i, workItem);
        return;
      }
    }

    // At the end of the list, just add the item to the end
    prioritizedWork.Add(workItem);
  }

  /**
   * Returns less than 0 if a is first, greater than 0 if b is first, or 0 if a=b
   */
  private int Compare(WorkItem a, WorkItem b)
  {
    if (a.priority == b.priority)
    {
      return a.wordSize - b.wordSize;
    }
    else
    {
      return a.priority - b.priority;
    }
  }

  public WorkItem TakeNextItem()
  {
    WorkItem next = prioritizedWork[0];
    prioritizedWork.RemoveAt(0);
    return next;
  }
}

public class Worker
{
  public void DoWork(WorkItem item)
  {
    // Handle the case where word size is greater than data length
    if (item.wordSize > item.data.Length)
    {
      item.output = item.data;
      return;
    }

    int numWords = item.data.Length / item.wordSize;
    item.output = "";
    for (int i = 0; i < numWords; i++)
    {
      int startIndex = i * item.wordSize;
      item.output += item.data.Substring(startIndex, item.wordSize).Trim('^') + " ";
    }

    item.output = item.output.Trim();
  }
}