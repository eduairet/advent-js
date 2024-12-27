def min_moves_to_stables(reindeer, stables):
    reindeer = sorted(reindeer)
    stables = sorted(stables)
    return sum(abs(r - s) for r, s in zip(reindeer, stables))
